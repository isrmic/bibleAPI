# BibleAPI
the BibleAPI project is a simple Graphql API that makes use of data collected from the web and returns the biblical content (books, chapters, verse) according to the requests made.

# What was used?
In this project the data collected from this project were used: [biblical-data-collector](https://github.com/isrmic/biblical-data-collector).
And used this for the API: [scaffoldingAPI](https://github.com/isrmic/scaffoldingAPI).

# Get Started
    1- git clone https://github.com/isrmic/bibleAPI <name-folder>
    2- cd <name-folder>
    3- npm install
    4- npm run start
With this we can have something similar to this:
```bash
server is started at port 5000
the server is acessible on: http://127.0.0.1:5000/
```
Access your browser at http://127.0.0.1:5000/ to access the playgroud and do the tests you want.

See this examples online:
API: [Example API](https://biblenvtapi.herokuapp.com/)

APP: [Example APP](http://myapplications.tk)

# how to get the data?
### Examples
The consultations must be made according to the scheme:
```gql
type Query {
    books(bookname: String, chapter: Int, versicle: Int, content: String): [Book!]!
    randomversicle (bookname: String, chapter: Int): RandVerse!
}
```

Get all books:
```gql
query getbooks {
  books {
    bookname
    chaptersnumber
    chapters {
      chapternumber
      versiclesnumber
      versicles {
        versiclenumber
        content
      }
    }
  }
}
```

Filter by Name:
```gql
query getbooks {
  books (bookname: "Gênesis") {
    bookname
    chaptersnumber
    chapters {
      chapternumber
      versiclesnumber
      versicles {
        versiclenumber
        content
      }
    }
  }
}
```

Filter by chapter:
```gql
query getbooks {
  books(bookname: "Gênesis", chapter: 1) {
    bookname
    chaptersnumber
    chapters {
      chapternumber
      versiclesnumber
      versicles {
        versiclenumber
        content
      }
    }
  }
}
```

Filter by verse:
```gql
query getbooks {
  books(bookname: "Gênesis", chapter: 1, versicle: 1) {
    bookname
    chaptersnumber
    chapters {
      chapternumber
      versiclesnumber
      versicles {
        versiclenumber
        content
      }
    }
  }
}
```

Filter by content:
```gql
query getbooks {
  books(bookname: "Gênesis", chapter: 1, versicle: 1, content: "criou") {
    bookname
    chaptersnumber
    chapters {
      chapternumber
      versiclesnumber
      versicles {
        versiclenumber
        content
      }
    }
  }
}
```

Get a random verse:

```gql
query randversicle {
  randomversicle {
    bookname
    chapternumber
    versiclenumber
    content
  }
}
```

```
OBS: para a busca de versículos aleatórios pode-se aplicar também os filtros, porém se limita ao que foi definido no esquema: "bookname: String, chapter: Int".
```

# Licence
MIT.