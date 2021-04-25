module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      country: { type: String, required: true },
      capital: { type: String, required: true },
      population: { type: String, required: true },
      language: { type: String, required: true },
      president: { type: String, required: true },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Country = mongoose.model("country", schema);
  return Country;
};
