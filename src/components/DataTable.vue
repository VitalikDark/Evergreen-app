<template>
  <v-container fluid>

    <data-table-filter
      @search="handleClickApplyFilter($event)"
      @reset="handleClickResetFilter"
    />

    <v-data-table
      :items="items"
      :headers="headers"
      :loading="isLoadingUSDTData"
      :options.sync="options"
      :server-items-length="formattedTotal"
    />

  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import DataTableFilter from "@/components/DataTableFilter";


export default {
  name: "DataTable",

  data() {
    return {
      options: {},
      total: 1,

      items: [],
      headers: [
        {text: 'dt', value: 'dt'},
        {text: 'freq', value: 'freq'},
        {text: 'id_api', value: 'id_api'},
        {text: 'ind', value: 'ind'},
        {text: 'k076', value: 'k076'},
        {text: 'leveli', value: 'leveli'},
        {text: 'parent', value: 'parent'},
        {text: 'txt', value: 'txt'},
        {text: 'txten', value: 'txten'},
        {text: 'tzep', value: 'tzep'},
        {text: 'value', value: 'value'},
      ],
      isLoadingUSDTData: false
    }
  },

  components: {
    DataTableFilter
  },

  computed: {
    ...mapGetters(['getUSDTData']),

    formattedTotal() {
      const { page, itemsPerPage } = this.options

      return this.items.length + itemsPerPage*page
    }
  },

  watch: {
    getUSDTData() {
      this.items = this.getUSDTData
    },

    options: {
      handler () {
        this.fetchLoadUSDTData()
      },
      deep: true
    },
  },

  methods: {
    ...mapActions(['loadUSDTData']),

    handleClickApplyFilter(search) {
      this.fetchLoadUSDTData(search)
    },

    handleClickResetFilter() {
      this.fetchLoadUSDTData()
    },

    fetchLoadUSDTData(search) {
      this.isLoadingUSDTData = true

      const { page, itemsPerPage } = this.options

      this.loadUSDTData({ limit: itemsPerPage, offset: page-1, search })
        .then(() => {
        })
        .catch((error) => {
          alert(error)
        })
        .finally(() => {
          this.isLoadingUSDTData = false
        })
    }
  }
}
</script>