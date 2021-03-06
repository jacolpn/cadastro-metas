export default theme => ({
    principal: {
        width: '10vh%',
        height: '100vh',
    },
    homeWrapper: {
        backgroundColor: 'rgb(248, 248, 248)',
        minHeight: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    h1: {
        marginTop: '70px'
    },
    imgCentral: {
        height: '50vmin',
        marginTop: '100px'
    },
    imgInsignia: {
        color: 'black',
        textDecoration: 'none',
        textTransform: 'none',
        marginTop: '120px'
    },
    h6: {
        marginTop: '-13px'
    },
    '@media (max-width: 480px)' : {
        h1: {
            marginTop: '50px'
        },
    }
})