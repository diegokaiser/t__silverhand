import instance from "./instance"

const employees = {
  GetEmployee: ( employeeId: string ) => instance.get(`employees/${employeeId}`)
}

export default employees
