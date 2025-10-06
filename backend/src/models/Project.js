const mongoose = require('mongoose');

// simple URL validator: allow empty string / undefined or http(s) URLs
const urlValidator = (v) => !v || /^https?:\/\/\S+$/.test(v);

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  tech: { type: [String], default: [] },
  link: {
    type: String,
    trim: true,
    validate: {
      validator: urlValidator,
      message: (props) => `${props.value} is not a valid URL`,
    },
  },
  image: {
    type: String,
    trim: true,
    validate: {
      validator: urlValidator,
      message: (props) => `${props.value} is not a valid URL`,
    },
  },
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
