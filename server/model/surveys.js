const mongoose = requrie('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [String] //array of strings
});

mongoose.model('surveys', surveySchema);
