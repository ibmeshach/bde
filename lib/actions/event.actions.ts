import { request } from "../../utils/axios-utils";

import {
  CreateEventParams,
  UpdateEventParams,
  DeleteEventParams,
  GetAllEventsParams,
  GetEventsByUserParams,
  GetRelatedEventsByCategoryParams,
} from "@/types";

// const getCategoryByName = async (name: string) => {
//   return Category.findOne({ name: { $regex: name, $options: 'i' } })
// }

// const populateEvent = (query: any) => {
//   return query
//     .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
//     .populate({ path: 'category', model: Category, select: '_id name' })
// }

// CREATE
export async function createEvent({ event, clerkId }: any) {
  return request({
    url: `events`,
    method: "post",
    data: event,
    clerkId,
  });
}

// UPDATE
export async function updateEvent({ event, clerkId }: any) {
  return request({
    url: `events`,
    method: "put",
    data: event,
    clerkId,
  });
}

// GET ONE EVENT BY ID
export async function getEventById(eventId: string) {
  return request({ url: `events/get/${eventId}` });
}

// DELETE
export async function deleteEvent({ eventId, path, clerkId }: any) {
  return request({
    url: `events/${eventId}`,
    method: "delete",
    clerkId,
  });
}

// GET ALL EVENTS
export async function getAllEvents({
  query,
  limit = 6,
  page,
  category,
}: GetAllEventsParams) {
  return request({
    url: `events`,
    data: {
      query,
      category,
      limit,
      page,
    },
  });
}

// GET EVENTS BY ORGANIZER
export async function getEventsByUser({
  userId,
  limit = 6,
  page,
}: GetEventsByUserParams) {
  return request({
    url: `events/user`,
    data: {
      limit,
      page,
    },
    clerkId: userId,
  });
}

// GET RELATED EVENTS: EVENTS WITH SAME CATEGORY
export async function getRelatedEventsByCategory({
  categoryId,
  eventId,
  limit = 3,
  page = 1,
}: GetRelatedEventsByCategoryParams) {
  return request({
    url: `events/related?categoryId=${categoryId}&eventId=${eventId}&limit=${limit}&page=${page}`,
  });
}
