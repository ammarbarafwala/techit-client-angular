export class Ticket {
	constructor(
		public subject?: string,
		public details?: string,
		public startDate?: Date,
		public endDate?: Date,
		public lastUpdated?: Date,
		public location?: string,
		public updates?: Array<Update>,
		public completionDetails?: string,
		public progress?: string,
		public priority?: string,
		public unitId?: string
	) {}
  }
  class Update{
	constructor(
		public modifier?: string,
		public updateDetails?: string,
		public modifiedDate?: Date
	) {}
  }