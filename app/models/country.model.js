module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      country: String,
      capital: String,
      population: Number,
      language: String,
      president: String,
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
