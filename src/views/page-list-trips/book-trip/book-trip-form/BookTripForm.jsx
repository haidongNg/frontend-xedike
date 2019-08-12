import React from "react";
// Material-UI
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Select,
  MenuItem
} from "@material-ui/core";
const BookTripForm = ({ valuesForm, handleOnchange, handleOnSubmit }) => {
  return (
    <Card>
      <form autoComplete="off" noValidate onSubmit={handleOnSubmit}>
        <CardHeader
          title="Thông tin đặt xe"
          subheader="The information can be edited"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth required margin="dense">
                <InputLabel>Điểm đón</InputLabel>
                <Select
                  name="locationGetIn"
                  value={valuesForm.locationGetIn}
                  onChange={handleOnchange}
                >
                  <MenuItem value="TP Hồ Chí Minh">TP Hồ Chí Minh</MenuItem>
                  <MenuItem value="TP Hà Nội">TP Hà Nội</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth required margin="dense">
                <InputLabel>Điểm đến</InputLabel>

                <Select
                  name="locationGetOff"
                  value={valuesForm.locationGetOff}
                  onChange={handleOnchange}
                >
                  <MenuItem value="TP Hồ Chí Minh">TP Hồ Chí Minh</MenuItem>
                  <MenuItem value="TP Hà Nội">TP Hà Nội</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth required margin="dense">
                <InputLabel>Số ghế đặt</InputLabel>
                <Input
                  type="number"
                  name="numberOfBookingSeats"
                  value={valuesForm.numberOfBookingSeats}
                  onChange={handleOnchange}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl
                component="fieldset"
                fullWidth
                required
                margin="dense"
              >
                <FormLabel component="legend">Hình thức thanh toán</FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  row
                  name="paymentMethod"
                  defaultValue={valuesForm.paymentMethod || "tienmat"}
                  onChange={handleOnchange}
                >
                  <FormControlLabel
                    value="tienmat"
                    control={<Radio />}
                    label="Tiền mặt"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="chuyenkhoan"
                    control={<Radio />}
                    label="Chuyển khoản"
                    labelPlacement="end"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item md={12} xs={12}>
              <div className="field">
                <div className="control">
                  <textarea
                    name="notes"
                    className="textarea is-primary"
                    value={valuesForm.notes}
                    onChange={handleOnchange}
                    placeholder="Primary textarea"
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button fullWidth type="submit" variant="outlined" color="primary">
            Đặt chỗ
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default BookTripForm;
