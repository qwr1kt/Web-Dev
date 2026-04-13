
# ── Level 3: CBV ─────────────────────────────────────────────────
# from api.views.cbv import (
#     ProductListAPIView,
#     ProductDetailAPIView,
# )


# ── Level 4: Mixins ───────────────────────────────────────────────
# from api.views.mixins import (
#     ProductListAPIView,
#     ProductDetailAPIView,
# )


# # ── Level 5: Generics (активен) ───────────────────────────────────
from api.views.generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)