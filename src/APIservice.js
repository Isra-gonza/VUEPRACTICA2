import axios from 'axios';
const urlTodo='http://localhost:3000';

const empleados = {
    getAll: () => axios.get(`${urlTodo}/empleados`),
    getOne: (id) => axios.get(`${urlTodo}/empleados/${id}`),
    create: (item) => axios.post(`${urlTodo}/empleados`, item),
    modify: (item) => axios.put(`${urlTodo}/empleados/${item.id}`, item),
    delete: (id) => axios.delete(`${urlTodo}/empleados/${id}`),
};
const clientes = {
    getAll: () => axios.get(`${urlTodo}/clientes`),
    getOne: (id) => axios.get(`${urlTodo}/clientes/${id}`),
    create: (item) => axios.post(`${urlTodo}/clientes`, item),
    modify: (item) => axios.put(`${urlTodo}/clientes/${item.id}`, item),
    delete: (id) => axios.delete(`${urlTodo}/clientes/${id}`),
};
const campos = {
    getAll: () => axios.get(`${urlTodo}/campos`),
    getOne: (id) => axios.get(`${urlTodo}/campos/${id}`),
    create: (item) => axios.post(`${urlTodo}/campos`, item),
    modify: (item) => axios.put(`${urlTodo}/campos/${item.id}`, item),
    delete: (id) => axios.delete(`${urlTodo}/campos/${id}`),
};

export default {
    empleados,
    clientes,
    campos,
};