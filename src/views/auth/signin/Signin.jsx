import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Container,
  Paper
} from "@material-ui/core";
const Signin = () => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });
  return (
    <div>
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container">
            <Container maxWidth="md">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Card>
                  <form>
                    <CardHeader
                      title={
                        <Typography align="center" variant="h4">
                          Đăng Nhập
                        </Typography>
                      }
                    />
                    <CardContent style={{ padding: "0 20px auto" }}>
                      <FormControl fullWidth margin="normal">
                        <InputLabel>Email</InputLabel>
                        <Input type="text" value={login.email} />
                      </FormControl>
                      <FormControl fullWidth margin="normal">
                        <InputLabel>Password</InputLabel>
                        <Input type="password" value={login.password} />
                      </FormControl>
                    </CardContent>
                    <CardActions>
                      <Button fullWidth>Đăng nhập</Button>
                    </CardActions>
                  </form>
                </Card>
              </Grid>
            </Container>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
