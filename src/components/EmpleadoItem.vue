<template>
  <tr>
    <td>{{ empleado.id }}</td>
    <td>{{ empleado.nombre }} {{empleado.apellido1}} {{empleado.apellido2}}</td>
    <td>
      <b-icon icon="pencil-fill" @click="editarProd(empleado.id)"></b-icon>
      <b-icon
        icon="trash-fill"
        @click="removeProd(indice, empleado.id)"
      ></b-icon>
    </td>
  </tr>
</template>
<script>
export default {
name: "empleado-item",
props: ["empleado","indice"],
}
</script>

<style>

</style>