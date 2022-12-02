import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1" color="#fcd68f" component="div" gutterBottom>
        HOME
      </Typography>
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        className="btnGroup"
      >
        <Button>
          {
            <Link to="/" className="link">
              Home
            </Link>
          }
        </Button>
        <Button>
          {
            <Link to="/Translate" className="link">
              Translate
            </Link>
          }
        </Button>
        <Button>
          {
            <Link to="/Flashcard" className="link">
              Flashcard
            </Link>
          }
        </Button>
        <Button>
          {
            <Link to="/About" className="link">
              About
            </Link>
          }
        </Button>
        <Button>
          {
            <Link to="/Joke" className="link">
              Joke API
            </Link>
          }
        </Button>
      </ButtonGroup>
    </Box>
  );
}
