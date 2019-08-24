import React from "react";
// Material-UI
import {
  Card,
  CardContent,
  Divider,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import moment from "moment";
const BookTripInfo = ({ info, classes }) => {
  return (
    <Card>
      <CardContent>
        <Box component="div" className={classes.details}>
          <Box>
            <Typography gutterBottom variant="h5" display="block">
              Thông tin chuyến xe
            </Typography>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Box component="div" className="level is-mobile">
                    <Box component="div" className="level-left level-item">
                      <Typography
                        component="span"
                        variant="h6"
                        display="inline"
                      >
                        Điểm đi:
                      </Typography>
                    </Box>
                    <Box component="div" className="level-right level-item">
                      <h6 className="subtitle is-6">{info.locationFrom}</h6>
                    </Box>
                  </Box>
                </ListItemText>
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Box component="div" className="level is-mobile">
                    <Box component="div" className="level-left level-item">
                      <Typography
                        component="span"
                        variant="h6"
                        display="inline"
                      >
                        Điểm đến:
                      </Typography>
                    </Box>
                    <Box component="div" className="level-right level-item">
                      <h6 className="subtitle is-6">{info.locationTo}</h6>
                    </Box>
                  </Box>
                </ListItemText>
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Box
                    component="div"
                    className="level is-flex-mobile is-desktop"
                  >
                    <Box component="div" className="level-left level-item">
                      <Typography
                        component="span"
                        variant="h6"
                        display="inline"
                      >
                        Thời gian:
                      </Typography>
                    </Box>
                    <Box component="div" className="level-right level-item">
                      <h6 className="subtitle is-6">
                        {moment(info.startTime).format("L")} - 
                        {moment(info.startTime).format("LT")}
                      </h6>
                    </Box>
                  </Box>
                </ListItemText>
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Box component="div" className="level is-mobile">
                    <Box component="div" className="level-left level-item">
                      <Typography
                        component="span"
                        variant="h6"
                        display="inline"
                      >
                        Số ghế trống:
                      </Typography>
                    </Box>
                    <Box component="div" className="level-right level-item">
                      <h6 className="subtitle is-6">{info.availableSeats}</h6>
                    </Box>
                  </Box>
                </ListItemText>
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Box component="div" className="level is-mobile">
                    <Box component="div" className="level-left level-item">
                      <Typography
                        component="span"
                        variant="h6"
                        display="inline"
                      >
                        Chi phí:
                      </Typography>
                    </Box>
                    <Box component="div" className="level-right level-item">
                      <h6 className="subtitle is-6">{info.fee} VNĐ</h6>
                    </Box>
                  </Box>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default BookTripInfo;
