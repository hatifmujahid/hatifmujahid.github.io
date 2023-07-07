import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Stack from "@mui/material/Stack";

const blogs = [
  {
    title: "Write up for intra-FAST CTF ",
    description: "This article has writeups of challenges done by me, one of the member of the team Cyber Rizzlers. These are solutions to some challenges I solved.",
    img: "https://miro.medium.com/v2/resize:fit:828/0*S4q46p4J3LEeJBh_",

  },
  {
    title: "How to make Container a button in Flutter",
    description: "As a beginner Flutter Developer I found it hard to make my apps look as fascinating as the ones I use on a daily basis, like Facebook, WhatsApp etc.",
    img: "https://miro.medium.com/v2/resize:fit:828/0*9G5QgA0pdu6CfBSf",

  },
];

export default function Blogs() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", justifyItems: "center" }}>
      {blogs.map((blog) => (
        <Stack column sx={{margin:'10px'}}>
        <Card sx={{ width: '600px', backgroundColor:'	#5D3FD3' }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {blog.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ color: "black" }}
              >
                {blog.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                style={{ color: "white", backgroundColor: "black" }}
                href={blog.link}
              >
                Read More
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
        </Stack>
      ))}
  </Box>
  

</div>

  );
}

