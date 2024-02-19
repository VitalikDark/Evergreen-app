<template>
  <v-container fluid>
    <v-row >
      <v-col cols="12" sm="1">
        <v-text-field
            label="period"
            placeholder="YYYYMMDD"
            v-model="formData.period"
            hide-details
        />
      </v-col>
      <v-col cols="12" sm="1">
        <v-text-field
            label="start"
            placeholder="YYYYMMDD"
            v-model="formData.start"
            hide-details
        />
      </v-col>
      <v-col cols="12" sm="1">
        <v-text-field
            label="end"
            placeholder="YYYYMMDD"
            v-model="formData.end"
            hide-details
        />
      </v-col>
      <v-col cols="12" sm="1">
        <v-text-field
            v-model="formData.order"
            label="order"
            hide-details
        />
      </v-col>
      <v-col cols="12" sm="1">
        <v-text-field
            v-model="formData.sort"
            label="sort"
            hide-details
        />
      </v-col>
      <v-col cols="12" sm="1">
        <v-text-field
            v-model="formData.id_api"
            label="id_api"
            hide-details
        />
      </v-col>
      <v-col cols="12" sm="1">
        <v-text-field
            v-model="formData.s181"
            label="s181"
            hide-details
        />
      </v-col>
      <v-col cols="12" sm="1">
        <v-text-field
            v-model="formData.freq"
            label="freq"
            hide-details
        />
      </v-col>

      <v-col align-self="end">
        <v-btn
            class="mx-1"
            small @click="handleClickApply"
        >
          Apply
        </v-btn>
        <v-btn
            class="mx-1"
            small @click="handleClickResetFilter">
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DataTableFilter",

  data() {
    return {
      formData: {
        date: '',
        start: '',
        end: '',
        sort: '',
        order: '',
        period: '',
        id_api: '',
        s181: '',
        freq: ''
      }
    }
  },

  methods: {
    handleClickApply() {
      console.log(1, this.createFormData())
      this.$emit('search', this.createFormData())
    },

    handleClickResetFilter() {
      this.$emit('reset')
      this.resetFields()
    },

    resetFields() {
      this.formData.period = ''
      this.formData.start = ''
      this.formData.end = ''
      this.formData.sort = ''
      this.formData.order = ''
      this.formData.id_api = ''
      this.formData.s181 = ''
      this.formData.freq = ''
    },

    createFormData() {
      return {
        period: this.formData.period,
        start: this.formData.start,
        end: this.formData.end,
        sort: this.formData.sort,
        order: this.formData.order,
        id_api: this.formData.id_api,
        s181: this.formData.s181,
        freq: this.formData.freq,
      }
    }

  }
}
</script>
