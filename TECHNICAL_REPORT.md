# Technical Analysis Report: CRM to Storefront Architecture Integration

**Date**: July 13, 2026
**Project**: BALI FRUITS PT
**Subject**: Decoupling of Static Frontend Catalog and Dynamic Integration with CRM Backend

## 1. Executive Summary
This report details the architectural shift of the BALI FRUITS PT storefront from a static, hardcoded product catalog to a fully dynamic, API-driven architecture managed exclusively by the internal CRM. The CRM now acts as the authoritative source (Master) for all product data, including multilingual content (7 languages), pricing, and inventory status.

## 2. Pre-existing Architecture (Before Changes)
- **Frontend (`script.js`)**: Contained a statically defined, hardcoded array of products (`const products = [...]`). All translations (EN, FR, IT, RU, ID, ZH, UK), prices, and image references were embedded directly into the frontend codebase.
- **Backend/CRM (`crm/js/db.js`)**: Maintained a separate, disconnected dataset (`INITIAL_MOCK_DATA`) with only 7 generic products. There was no synchronization between CRM inventory management and the storefront.
- **Limitation**: Any change to pricing, stock availability, or marketing copy required a developer to manually edit the frontend source code.

## 3. Implemented Architecture (After Changes)

### 3.1 Database & Data Modeling Migration
The product dataset has been unified. The 12 primary frontend products have been migrated into the CRM database schema (`crm/data/products.json` or Supabase).
- **Schema Enhancements**: The CRM `products` entity was expanded to include:
  - `visual`: String (Identifier for the image asset)
  - `sellingPrice`: Integer (Numeric value in Rupiah for calculations)
  - `quantity`: Integer (Stock tracking)
  - `availability`: String Enum ("In Stock", "Out of Stock", "Limited")
  - `[lang]`: Object (Nested translation objects for `en`, `fr`, `it`, `ru`, `id`, `zh`, `uk` containing `name`, `unit`, `tag`, `detail`, and `description`).

### 3.2 CRM Admin Interface Extension
The CRM Single Page Application (`crm/js/app.js`) was extended to allow non-technical staff to manage the entire catalog.
- **Edit Modal UI**: A dynamic modal was injected into `crm/index.html` allowing full CRUD capabilities over the expanded product schema.
- **Translation Matrix Management**: The UI was updated to include accordion-style input groups for all 7 supported languages, enabling marketing teams to update copy across all localizations from a single interface.
- **Persistence**: Edits made in the CRM are saved via the `DatabaseManager` (`db.js`), writing to either the local Node.js JSON file storage or Supabase Cloud depending on the environment configuration.

### 3.3 Dynamic Frontend Consumption
The static dataset was removed from the frontend.
- **Data Fetching (`fetchDynamicCatalog`)**: The storefront now asynchronously fetches the catalog during `DOMContentLoaded`.
- **Hybrid API Resolution**: The fetch logic prioritizes Supabase (if credentials exist in `localStorage`) and falls back to the local Express server (`http://localhost:3000/api/products`), ensuring seamless transitions between local development and cloud production.
- **State Reactive UI**: 
  - Prices are formatted dynamically based on the integer `sellingPrice` stored in the CRM.
  - The "Add to Cart" CTA respects the CRM's inventory status. If a product is marked as `Out of Stock`, the button is automatically disabled on the frontend.

## 4. Considerations & Next Steps for the Analyst
1. **Deployment Architecture**: Currently, the CRM uses a local Express server writing to `.json` files. If deployed to a serverless environment (e.g., Vercel), this local DB adapter will fail due to read-only filesystems. The project is already equipped with a `SupabaseAdapter`. The client must configure a Supabase project and provide the URL/Anon Key to the CRM to enable persistent cloud storage.
2. **Additional Modules**: The dynamic linking has been successfully implemented for the primary `products`. Similar decoupling may be required in the future for `boxes` and `delivery` zones, which still reside in static JS files on the frontend.
3. **Cart Validation**: While the frontend now pulls dynamic prices on load, a final price validation hook could be added to `cart-page.js` to verify prices strictly at the moment of checkout, preventing tampering via browser dev tools.
