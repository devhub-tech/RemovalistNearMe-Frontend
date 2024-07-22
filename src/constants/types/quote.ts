export interface QuoteInitialState {
  loading: boolean;
  info: any;
  error: any;
  success: boolean;
}

export interface QuotePayload {
  user: number;
  status?: string;
  rooms: [];
  additional_items: [];
  when_type: string;
  date_1: string;
  date_2: string;
  pickup_address: string;
  pickup_address_property_type: string;
  dropoff_address: string;
  dropoff_address_property_type: string;
  additional_services?: [];
  level_of_service: string;
  other_details?: string;
  email: string;
}
