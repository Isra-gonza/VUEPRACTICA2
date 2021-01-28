<template>
  <div class="container">
    <header>
      <h1>Empleados - ACME SL</h1>
    </header>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">
        <table class="table table-striped table-hover">
          <thead class="thead-dark bg-primary">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="tbody">
            <empleado-item
              v-for="(empleado, indice) in empleados"
              :key="empleado.id"
              :empleado="empleado"
              :indice="indice"
            ></empleado-item>
          </tbody>
        </table>
        <h2 v-if="!empleados.length">No hay empleados que mostrar</h2>
      </div>
    </div>
  </div>
</template>

<script>
import EmpleadoItem from "../components/EmpleadoItem";
export default {
name: "Empleados-table",
  components: {
    "empleado-item": EmpleadoItem,
  },
  computed:{
    empleados(){
      return this.$store.state.empleados;
    }
  },
  mounted(){
      this.$store.dispatch('loadEmpleados');
  }
}
</script>

<style>

</style>