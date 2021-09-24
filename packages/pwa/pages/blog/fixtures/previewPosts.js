function* idGenerator(i) {
  yield i
  yield i + 1
}

const generateId = idGenerator(10)

export const previewPosts = [
  {
    id: 1,
    slug: {
      current: `slug-${generateId.next().value}`,
    },
    title: 'David Cross: The Pride Is Back',
    mainImage: {
      asset: {
        _ref: 'image-2223398ede61bc5955744a12cb6a582d2111bc4d-5734x3823-jpg',
        _type: 'reference',
      },
    },
    abstract:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
  },
  {
    id: 2,
    slug: {
      current: `slug-${generateId.next().value}`,
    },
    title: 'Space Pirate Captain Harlock: Arcadia of My Youth (Waga seishun no Arcadia)',
    mainImage: {
      asset: {
        _ref: 'image-2223398ede61bc5955744a12cb6a582d2111bc4d-5734x3823-jpg',
        _type: 'reference',
      },
    },
    abstract: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
  },
  {
    id: 3,
    slug: {
      current: `slug-${generateId.next().value}`,
    },
    title: 'Some Girl',
    mainImage: {
      asset: {
        _ref: 'image-2223398ede61bc5955744a12cb6a582d2111bc4d-5734x3823-jpg',
        _type: 'reference',
      },
    },
    abstract: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
  },
  {
    id: 4,
    slug: {
      current: `slug-${generateId.next().value}`,
    },
    title: 'Seven Pounds',
    mainImage: {
      asset: {
        _ref: 'image-2223398ede61bc5955744a12cb6a582d2111bc4d-5734x3823-jpg',
        _type: 'reference',
      },
    },
    abstract:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
  },
  {
    id: 5,
    slug: {
      current: `slug-${generateId.next().value}`,
    },
    title: 'Jewel of the Nile, The',
    mainImage: {
      asset: {
        _ref: 'image-2223398ede61bc5955744a12cb6a582d2111bc4d-5734x3823-jpg',
        _type: 'reference',
      },
    },
    abstract:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
  },
  {
    id: 6,
    slug: {
      current: `slug-${generateId.next().value}`,
    },
    title: 'Last Days of Disco, The',
    mainImage: {
      asset: {
        _ref: 'image-2223398ede61bc5955744a12cb6a582d2111bc4d-5734x3823-jpg',
        _type: 'reference',
      },
    },
    abstract: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
  },
  {
    id: 7,
    slug: {
      current: `slug-${generateId.next().value}`,
    },
    title: 'Happiness Is in the Field (Bonheur est dans le pré, Le)',
    mainImage: {
      asset: {
        _ref: 'image-2223398ede61bc5955744a12cb6a582d2111bc4d-5734x3823-jpg',
        _type: 'reference',
      },
    },
    abstract:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
  },
  {
    id: 8,
    slug: {
      current: `slug-${generateId.next().value}`,
    },
    title: 'The House of Intrigue',
    mainImage: {
      asset: {
        _ref: 'image-2223398ede61bc5955744a12cb6a582d2111bc4d-5734x3823-jpg',
        _type: 'reference',
      },
    },
    abstract: 'Nulla mollis molestie lorem. Quisque ut erat.',
  },
  {
    id: 9,
    slug: {
      current: `slug-${generateId.next().value}`,
    },
    title: 'Little Trip to Heaven, A',
    mainImage: {
      asset: {
        _ref: 'image-2223398ede61bc5955744a12cb6a582d2111bc4d-5734x3823-jpg',
        _type: 'reference',
      },
    },
    abstract: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
  },
  {
    id: 10,
    slug: {
      current: `slug-${generateId.next().value}`,
    },
    title: "Creature Wasn't Nice, The (a.k.a. Naked Space) (a.k.a. Spaceship)",
    mainImage: {
      asset: {
        _ref: 'image-2223398ede61bc5955744a12cb6a582d2111bc4d-5734x3823-jpg',
        _type: 'reference',
      },
    },
    abstract:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
  },
]
