import logger from '../../utils/logger';
import { BREEDS_ALL, API_SUCCESS_MSG, API_FAIL_MSG, SUCCESS_STATUS_CODE } from "../../constants"

export async function GET() {
  try {
    const res = await fetch(BREEDS_ALL);
    if (!res.status === SUCCESS_STATUS_CODE)
      throw new Error(API_FAIL_MSG);
    const data = await res.json();
    logger.log(API_SUCCESS_MSG);
    return Response.json(data.message)
  } catch (error) {
    logger.error(API_FAIL_MSG);
    Response.json({ error: API_FAIL_MSG });
  }
}