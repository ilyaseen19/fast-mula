const chrachters = "0123456789";

const _generateId = async (length: number): Promise<string> => {
    let result = "";
    const charactersLength = chrachters.length;
    for (let i = 0; i < length; i++) {
        result += chrachters.charAt(
            Math.floor(Math.random() * charactersLength),
        );
    }

    return result;
};

export default _generateId;
