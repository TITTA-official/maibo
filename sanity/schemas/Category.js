const CategorySchema = {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Category Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "description",
      type: "string",
      title: "Category Description",
    },
  ],
};

export default CategorySchema;
