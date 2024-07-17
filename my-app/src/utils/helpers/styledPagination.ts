import { Pagination } from "@mui/material";
import styled from "styled-components";

export const StyledPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    backgroundColor: "#E6F1FC",
    width: "52px",
    height: "52px",
    color: "#0073E6",
    fontWeight: "700",
    lineHeight: "20px",
    borderRadius: "12px",
    "&:hover": {
      backgroundColor: "#0073e63a"
    }
  },
  "& .MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "#0073E6",
    color: "#fff",
    "&:hover": {
      backgroundColor: "rgba(33, 150, 243, 0.7)"
    }
  },
  "& .MuiPaginationItem-ellipsis": {
    paddingTop: "13px",
    backgroundColor: "transparent"
  }
});
