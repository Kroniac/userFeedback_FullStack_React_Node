const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientSchema = require('./recipient');
const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema], //array of strings
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'user' },
  lastSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
