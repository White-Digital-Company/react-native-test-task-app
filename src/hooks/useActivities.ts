import { getActivitiesQuery } from "@/api/queries";

export const useActivities = () => {

  const {
    data: activities,
    isLoading: isActivitiesLoading,
    isSuccess
  } = getActivitiesQuery();

  return { activities, isActivitiesLoading, isSuccess };
};
