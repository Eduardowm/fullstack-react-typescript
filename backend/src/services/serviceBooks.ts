import { ObjectId } from "mongodb";
import { Service } from "typedi";
import { getCustomRepository } from "typeorm";
import { BookRepository } from "../repositories/bookRepository";
import { Book } from "../schemas/Book";
import { CreateBookInput } from "../schemas/Inputs/Book/createBookInput";
import { UpdateBookInput } from "../schemas/Inputs/Book/updateBookInputs";

@Service()
export default class BookService {
  private bookRepository!: BookRepository;

  constructor() {
    this.bookRepository = getCustomRepository(BookRepository, "mongodb");
  }

  count = async (): Promise<Number> => await this.bookRepository.count();

  findByName = async (term: string, page?: number): Promise<Book[]> =>
    await this.bookRepository.findByName(term, page);

  findById = async (_id: string): Promise<Book> => {
    const book = await this.bookRepository.findOne({
      where: {
        _id: new ObjectId(_id),
      },
    });
    if (!book) throw new Error(`Book unexistent: ${_id}`);
    return book;
  };
  findAll = async (): Promise<Book[]> => await this.bookRepository.find();

  create = async (createBookInput: CreateBookInput): Promise<Book> => {
    const book = this.bookRepository.create(createBookInput);
    return await this.bookRepository.save(book);
  };

  update = async (
    _id: string,
    updateBookInput: UpdateBookInput
  ): Promise<Book> => {
    const result = await this.findById(_id);
    if (result) {
      await this.bookRepository.updateOne(
        {
          _id: new ObjectId(_id),
        },
        { $set: updateBookInput }
      );
    }

    return await this.findById(_id);
  };

  delete = async (_id: string): Promise<boolean> => {
    const result = await this.bookRepository.findOneAndDelete({
      _id: new ObjectId(_id),
    });
    return !!result.value;
  };
}
