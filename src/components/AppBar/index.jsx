import ModeSelect from "~/components/ModeSelect";
import Box from "@mui/material/Box";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AppsIcon from "@mui/icons-material/Apps";
import { Typography } from "@mui/material";
import WorkSpaces from "./Menus/WorkSpaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profiles from "./Menus/Profiles";
import Button from "@mui/material/Button";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

const AppBar = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: (theme) => theme.trello.appBarHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          paddingX: 2,
          overflowX: "auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <AppsIcon sx={{ color: "primary.main" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <BookmarkIcon sx={{ color: "primary.main" }} fontSize="small" />
            <Typography
              variant="span"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "primary.main",
                cursor: "pointer",
              }}
            >
              Keeper
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <WorkSpaces />
            <Recent />
            <Starred />
            <Templates />
            <Button variant="outlined" startIcon={<LibraryAddIcon />}>
              Create
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            id="outlined-search"
            label="Search..."
            type="search"
            size="small"
            sx={{ minWidth: "120px" }}
          />

          <ModeSelect />

          <Tooltip title="Notifications">
            <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
              <NotificationsNoneIcon sx={{ color: "primary.main" }} />
            </Badge>
          </Tooltip>

          <Tooltip title="Help">
            <HelpOutlineIcon
              sx={{ cursor: "pointer", color: "primary.main" }}
            />
          </Tooltip>
          <Profiles />
        </Box>
      </Box>
    </>
  );
};

export default AppBar;
