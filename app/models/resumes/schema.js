import mongoose from '../mongoose';

const MongoSchema = mongoose.Schema;

const ResumeSchema = new MongoSchema({
  userId: String,
  resume: {
    info: {
      name: String,
      email: String,
      phone: String,
      gender: String,
      location: String,
      avator: String,
      intention: String,
      hireAvailable: { type: Boolean, default: false },
      freshGraduate: { type: Boolean, default: false },
    },
    educations: [{
      school: String,
      major: String,
      education: String,
      startTime: String,
      endTime: String,
      experiences: Array,
    }],
    workExperiences: [{
      company: String,
      url: String,
      startTime: String,
      endTime: String,
      untilNow: { type: Boolean, default: false },
      position: String,
      projects: [{
        name: String,
        details: Array,
        url: { type: String, default: '' }
      }]
    }],
    personalProjects: [{
      url: String,
      title: String,
      desc: String,
      techs: Array
    }],
    others: {
      expectLocation: String,
      expectLocations: Array,
      expectSalary: String,
      dream: String,
      supplements: Array,
      socialLinks: [{
        name: String,
        icon: String,
        url: String
      }]
    }
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

ResumeSchema.index({
  userId: 1,
});

export default mongoose.model('Resumes', ResumeSchema);
