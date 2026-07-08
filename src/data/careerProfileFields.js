const careerProfileFields = [
 {
  step: 0,
  title: "Welcome to PrepVerse AI",
  message:
    "Choose your journey. Prep will personalize everything based on your goal.",

  fields: [
    {
      id: "goal",
      type: "cards",

      options: [
        {
          title: "🎤 Build Confidence",
          description:
            "Improve communication skills and overcome the fear of speaking."
        },

        {
          title: "💼 Job Interview Preparation",
          description:
            "Practice HR, technical and behavioral interviews."
        },

        {
          title: "📄 Create My Resume",
          description:
            "Build an ATS-friendly professional resume with AI."
        },

        {
          title: "🎙 Public Speaking",
          description:
            "Learn to speak confidently on stage or in meetings."
        },

        {
          title: "🏛 Competitive Interviews",
          description:
            "Prepare for UPSC, Banking, MBA and other interviews."
        },

        {
          title: "🤔 I'm Not Sure Yet",
          description:
            "Prep will guide you and help you discover the best path."
        }
      ]
    }
  ]
},

  {
    step: 1,
    title: "Personal Information",
    fields: [
      {
        id: "fullName",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "Enter your full name"
      },
      {
        id: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "Enter your email"
      },
      {
        id: "phone",
        label: "Phone Number",
        type: "tel",
        required: true,
        placeholder: "Enter your phone number"
      }
    ]
  },

  {
    step: 2,
    title: "Education",
    fields: [
      {
        id: "qualification",
        label: "Current Qualification",
        type: "text",
        placeholder: "B.Tech, MBBS, MBA..."
      },
      {
        id: "college",
        label: "College / School Name",
        type: "text"
      },
      {
        id: "branch",
        label: "Branch / Stream",
        type: "text"
      }
    ]
  },

  {
    step: 3,
    title: "Career Goals",
    fields: [
      {
        id: "dreamCompany",
        label: "Dream Company",
        type: "text"
      },
      {
        id: "interviewLanguage",
        label: "Preferred Interview Language",
        type: "text"
      }
    ]
  }
];

export default careerProfileFields;