const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
    getCurrUserGroups,
    removeUserFromGroup
} = require("../../controllers/groups_controller");

const {
    getCurrUserInvites,
    getCurrUserOutcomingInvites
} = require("../../controllers/invites_controller");

const {
    registerUser,
    loginUser,
    currentUser,
    searchForUsersToInvite
} = require("../../controllers/users_controller");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/current", passport.authenticate("jwt", {session: false}), currentUser);

router.get("/groups", passport.authenticate("jwt", {session: false}), getCurrUserGroups);
router.get("/invites", passport.authenticate("jwt", {session: false}), getCurrUserInvites);
router.get("/sent_invites", passport.authenticate("jwt", {session: false}), getCurrUserOutcomingInvites);
router.get("/invite_user_search", passport.authenticate("jwt", {session: false}), searchForUsersToInvite);
router.delete("/:groupId", passport.authenticate("jwt", {session: false}), removeUserFromGroup);

module.exports = router;