const daoCommon = require('./common/daoCommon')

const albumDao = {
    ...daoCommon, ...require('./api/albumDao')
}

const artistDao = {
    ...daoCommon, ...require('./api/artistDao')
}

const genreDao = {
    ...daoCommon, ...require('./api/genreDao')
}

const labelDao = {
    ...daoCommon, ...require('./api/labelDao')
}

const posterDao = {
    ...daoCommon, ...require('./api/posterDao')
}

const userDao = {
    ...daoCommon, ...require('./api/userDao')
}

module.exports = {
    albumDao,
    artistDao,
    genreDao,
    labelDao,
    posterDao,
    userDao
}

