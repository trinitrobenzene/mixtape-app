import amy from "./avatars/image-amyrobson.png";
import jul from "./avatars/image-juliusomo.png";
import max from "./avatars/image-maxblagun.png";
import ram from "./avatars/image-ramsesmiron.png";
import img from "./sample.jpeg";
export const UserComment = [
  {
    currentUser: {
      image: {
        png: jul,
      },
      username: "huuthang",
    },
    comments: [
      {
        id: 3,
        content: "Amazing!",
        createdAt: "1 weeks ago",
        atTimeInTrack: "01:23",
        score: 5,
        user: {
          image: {
            png: jul,
          },
          username: "huuthang",
        },
        replies: [],
      },
      {
        id: 1,
        content:
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: "1 month ago",
        atTimeInTrack: "00:22",
        score: 12,
        user: {
          image: {
            png: amy,
          },
          username: "amyrobson",
        },
        replies: [],
      },
      {
        id: 2,
        content:
          "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: "2 weeks ago",
        atTimeInTrack: "01:22",
        score: 5,
        user: {
          image: {
            png: max,
          },
          username: "maxblagun",
        },
        replies: [],
      },
    ],
  },
];
