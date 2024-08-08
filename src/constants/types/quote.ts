export interface QuoteInitialState {
  loading: boolean;
  info: any;
  error: any;
  success: boolean;
}

export interface QuotePayload {
  user: number;
  status?: string;
  rooms: any[];
  additional_items: any[];
  when_type: string;
  date_1: string | null;
  date_2: string | null;
  pickup_address: string;
  pickup_address_property_type: string;
  dropoff_address: string;
  dropoff_address_property_type: string;
  additional_services?: string;
  level_of_service: string;
  other_details?: string;
  email: string;
}
