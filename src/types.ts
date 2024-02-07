export type ModalFactoryPayload = {
  open: boolean
  modal: string
  props?: Object
}

export type TaskNotificationPayload = {
  action: string
}

export type Task = {
  id: string
  category: string
  title: string
  description: string
  created_at: string
  finish_by: string
  status: string
  is_finished: boolean
  belongs_to: {
    name: string
    uid: string
  }
}

export type TaskRelations = {
  [key: string]: {
    color: string
    items: Task[]
  }
}

export type Category = {
  name: string
}

export type LoadingRouteEmit = {
  loading: boolean
}
