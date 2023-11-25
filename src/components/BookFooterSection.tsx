import React, { useEffect, useState } from "react";
import BookList from "./BookList";
import { TBook } from "../types";
import Pagination from "./Pagination";
import { getBooks } from "../util/getBooks";
import ThinContainer from "./ThinContainer";

type Props = {};

const limit = 6;

const BookFooterSection = (props: Props) => {
  const [books, setBooks] = useState<TBook[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  useEffect(() => {
    getBooks({ limit, skip: (currentPage - 1) * limit }).then((res) =>
      setBooks(res)
    );
  }, [currentPage]);

  useEffect(() => {
    getBooks({}).then((res) => setTotalPage(Math.ceil(res.length / limit)));
  }, []);

  return (
    <ThinContainer>
      <BookList books={books}>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          total={totalPage}
        />
      </BookList>
    </ThinContainer>
  );
};

export default BookFooterSection;
