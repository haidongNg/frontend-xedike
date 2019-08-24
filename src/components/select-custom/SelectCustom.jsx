import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText
} from "@material-ui/core";
import { connect } from "react-redux";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
const SelectCustom = ({
  variant,
  margin,
  label,
  name,
  value,
  onChangeSelect,
  district,
  error
}) => {
  return (
    <FormControl
      fullWidth
      variant={variant}
      margin={margin}
      error={error.locationFrom || error.locationTo ? true : false}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        value={value}
        onChange={onChangeSelect}
        MenuProps={MenuProps}
      >
        <MenuItem value="">None</MenuItem>
        {district.map((val, index) => {
          return (
            <MenuItem key={index} value={val}>
              {val}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{error.locationFrom || error.locationTo}</FormHelperText>
    </FormControl>
  );
};

const mapStateToProps = state => ({
  district: state.district,
  error: state.errors
});

export default connect(
  mapStateToProps,
  null
)(SelectCustom);
