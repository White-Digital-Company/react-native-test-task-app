import { IActivity } from 'types/activity.type'
import { EnhancedWithAuthHttpService } from '../../shared/services/http-auth.service'
import { HttpFactoryService } from '../../shared/services/http-factory.service'

class ActivityService {
  constructor(private readonly httpService: EnhancedWithAuthHttpService) {
    this.httpService = httpService
  }

  private readonly module = 'activities'

  public async getAllActivities(): Promise<IActivity[]> {
    return this.httpService.get(`${this.module}`)
  }
}

export const activityService = new ActivityService(
  new HttpFactoryService().createAuthHttpService(),
)
