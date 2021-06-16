<template>
  <table class="control-panel__result">
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{header}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows" :key="index">
        <td v-for="(col, index) in headers" :key="index">{{row[col]}}</td>
      </tr>
  </tbody>
  </table>
</template>

<script lang="ts">
import store from '@/store'
import {Vue} from 'vue-property-decorator'

export default class MemoryResults extends Vue {
  options = {
    era: undefined,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: undefined,
    timezone: undefined,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  public get headers(): string[] {
   return store.getters.RESULTS.length > 0 ? Object.keys(store.getters.RESULTS[0]): ["Result", "Date"];
  } 

  public get rows(): any {
    return store.getters.RESULTS.map((v:any) => ({result: v.result, date: new Date(v.date).toLocaleString('ru-RU', { hour12: false })}));
  } 
}
</script>

<style scoped>
table {
  font-family: 'Open Sans', sans-serif;
  border-collapse: collapse;
  border: 3px solid #3d9128;
  margin: 10px 10px 0 10px;
  background: white;
}

table th {
  text-transform: uppercase;
  text-align: center;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: center;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}

</style>