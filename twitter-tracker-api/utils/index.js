function createQuery( {keyword} ){
  const query =  keyword ? {keyword}:{}
  return query
}

function getLimit({limit} ){
  const query =  limit ? parseInt(limit) : undefined
  return query
}

module.exports = {
  createQuery,
  getLimit
}