export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      contracts: {
        Row: {
          contract_number: string | null
          contract_type: string | null
          created_at: string
          currency: string | null
          end_date: string | null
          id: string
          key_terms: Json | null
          metadata: Json | null
          parties: Json | null
          start_date: string | null
          summary: string | null
          updated_at: string
          value: number | null
        }
        Insert: {
          contract_number?: string | null
          contract_type?: string | null
          created_at?: string
          currency?: string | null
          end_date?: string | null
          id: string
          key_terms?: Json | null
          metadata?: Json | null
          parties?: Json | null
          start_date?: string | null
          summary?: string | null
          updated_at?: string
          value?: number | null
        }
        Update: {
          contract_number?: string | null
          contract_type?: string | null
          created_at?: string
          currency?: string | null
          end_date?: string | null
          id?: string
          key_terms?: Json | null
          metadata?: Json | null
          parties?: Json | null
          start_date?: string | null
          summary?: string | null
          updated_at?: string
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'contracts_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'documents'
            referencedColumns: ['id']
          }
        ]
      }
      documents: {
        Row: {
          created_at: string
          document_ai_raw_response: Json | null
          document_type: string
          file_name: string
          file_size: number
          id: string
          mime_type: string
          original_file_name: string
          processing_error: string | null
          status: string
          storage_path: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          document_ai_raw_response?: Json | null
          document_type: string
          file_name: string
          file_size: number
          id?: string
          mime_type: string
          original_file_name: string
          processing_error?: string | null
          status: string
          storage_path: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          document_ai_raw_response?: Json | null
          document_type?: string
          file_name?: string
          file_size?: number
          id?: string
          mime_type?: string
          original_file_name?: string
          processing_error?: string | null
          status?: string
          storage_path?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      invoices: {
        Row: {
          created_at: string
          currency: string | null
          customer_address: string | null
          customer_name: string | null
          customer_tax_id: string | null
          due_date: string | null
          id: string
          invoice_number: string | null
          issue_date: string | null
          line_items: Json | null
          metadata: Json | null
          total_amount: number | null
          updated_at: string
          vendor_address: string | null
          vendor_name: string | null
          vendor_tax_id: string | null
        }
        Insert: {
          created_at?: string
          currency?: string | null
          customer_address?: string | null
          customer_name?: string | null
          customer_tax_id?: string | null
          due_date?: string | null
          id: string
          invoice_number?: string | null
          issue_date?: string | null
          line_items?: Json | null
          metadata?: Json | null
          total_amount?: number | null
          updated_at?: string
          vendor_address?: string | null
          vendor_name?: string | null
          vendor_tax_id?: string | null
        }
        Update: {
          created_at?: string
          currency?: string | null
          customer_address?: string | null
          customer_name?: string | null
          customer_tax_id?: string | null
          due_date?: string | null
          id?: string
          invoice_number?: string | null
          issue_date?: string | null
          line_items?: Json | null
          metadata?: Json | null
          total_amount?: number | null
          updated_at?: string
          vendor_address?: string | null
          vendor_name?: string | null
          vendor_tax_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'invoices_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'documents'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
  ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
  ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
  ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums'] | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
  ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
  ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
  : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
