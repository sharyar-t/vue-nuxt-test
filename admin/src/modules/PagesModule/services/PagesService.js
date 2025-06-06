import api from '../../../libs/api'

export const getAll = async () => {
  const { data } = await api.get('/pages')

  return data
}

export const getOne = async (id) => {
  const { data } = await api.get(`/pages/${id}`)

  return data
}

export const create = async (payload) => {
  const { data } = await api.post('/pages', payload)

  return data
}

export const update = async (payload) => {
  const { data } = await api.put(`/pages/${payload.id}`, payload)

  return data
}

export const remove = async (id) => {
  const { data } = await api.delete(`/pages/${id}`)

  return data
}
