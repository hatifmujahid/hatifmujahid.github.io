import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const blogs = [
  {
    title: "Write up for intra-FAST CTF (Forensics and Reverse Engineering)",
    description: "This article has writeups of challenges done by me, one of the member of the team Cyber Rizzlers, along with Wahaj Javed Alam and Agha Maarij Amir who secured runner-up spot. I will be sharing how I approached some challenges and found the flags.",
    link: "https://medium.com/@hatifmujahid08/write-up-for-intra-fast-ctf-forensics-and-reverse-egineering-109864551bdb",
    img: "https://miro.medium.com/v2/resize:fit:828/0*S4q46p4J3LEeJBh_",
    backgroundColor: '#000000',
  },
  {
    title: "How to make Container a button in Flutter",
    description: "As a beginner Flutter Developer I found it hard to make my apps look as fascinating as the ones I use on a daily basis, like Facebook, WhatsApp etc.",
    link: "https://medium.com/@hatifmujahid08/how-to-make-container-a-button-in-flutter-68ca5942a59a",
    img: "https://miro.medium.com/v2/resize:fit:828/0*9G5QgA0pdu6CfBSf",
    backgroundColor: "#000000",
  },
];

export default function Blogs() {
  return (
    <div style={{ width: "900px", height:'900px' ,  margin: "0 auto" }}>
      <Carousel>
        {blogs.map((blog, index) => (
          <Paper
            key={index}
            elevation={3}
            style={{
              padding: "40px",
              borderRadius: "10px",
              backgroundColor: blog.backgroundColor,
              alignContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <img src={blog.img} alt="blog" />
            <br />
            <h2 style={{fontWeight:'bold'}}>{blog.title}</h2>
            <h3 style={{fontWeight:'light', color:'ivory'}}>{blog.description}</h3>
            <Button variant="contained" href={blog.link} target="_blank">
              Read More
            </Button>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}

