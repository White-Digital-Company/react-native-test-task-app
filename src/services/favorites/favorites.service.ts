import { EnhancedWithAuthHttpService } from '../../shared/services/http-auth.service'
import { HttpFactoryService } from '../../shared/services/http-factory.service'

class FavoritesService {
  constructor(private readonly httpService: EnhancedWithAuthHttpService) {
    this.httpService = httpService
  }

  private readonly module = 'favorites'

  public async postSetFav(id: number): Promise<{ message: string }> {
    return this.httpService.post(`${this.module}`, { id })
  }
}

export const favoritesService = new FavoritesService(
  new HttpFactoryService().createAuthHttpService(),
)
