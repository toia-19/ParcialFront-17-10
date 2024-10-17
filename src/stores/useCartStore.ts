import { defineStore } from "pinia";

import type { Book } from "@/models/BookModel";

import type { BookState } from "@/models/BookState";

export const useCartStore = defineStore ({
    id: "cartId",
    state: () : BookState => ({
        loading: false,
        data: [],
    }),
    actions: {
        addBook:{},
        editBook:{},
        deleteBook:{},
        // Basado en acción de "BookStore"
        getBook(): Book[]{
            const allBooks = this.data.filter((book) => book.featured);
            return allBooks;
        }
    }
})