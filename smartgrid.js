module.exports = {
    columns: 12,
    offset: '30px', //columns
    container: {
        maxWidth: '1840px',
        fields: '70px' // Внимание! fields обязан быть >= offset / 2
    },
    breakPoints: {
        // xl: {
        //     width: '1200px'
        // },
        lg: {
            width: '992px',
            fields: '70px'
        },
        // md: {
        //     width: '768px',
        // },
        sm: {
            width: '576px',
            fields: '20px'
        },
        // xs: {
        //  width: '341px',
        //  fields: '15px'
        // }
    },
    // detailedCalc: true
};