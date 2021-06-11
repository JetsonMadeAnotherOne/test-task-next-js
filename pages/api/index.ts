module.exports = async (req, res) => {
    const response = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
    const data = await response.json();
    res.json(data);
};
export default module;