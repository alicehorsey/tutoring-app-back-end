const connection = require("../db/connect")


exports.fetchAllPupils = () => {

    return connection
        .select("*")
        .from("pupils")
        .then((pupilsRows) => {
            return { pupils: pupilsRows }
        })
}

exports.fetchAllPupilsandParents = () => {

    return connection
        .select("*")
        .from("parents")
        .join("pupils", "pupils.parent_id", "=", "parents.parent_id")
        .then((pupilAndParentRows) => {
            return { pupilAndParentInfo: pupilAndParentRows }
        })
}
