function modifyList(modifyCondition){
    return {
        type: "ModifyList",
        modifyCondition: modifyCondition
    }
}

module.exports = modifyList;